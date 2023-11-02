type ProgressConstructor = {
  fileUrl: string;
  bytesStart: string;
  bytesEnd: string;
  setProgress: (value: number) => void;
  datachuck?: Uint8Array[];
};

export class Progress {
  private _fileUrl: string;
  private _setProgress: (value: number) => void;
  private _chunks: Uint8Array[] | undefined;
  private _bytesStart: string;
  private _bytesEnd: string;

  constructor({ fileUrl, datachuck, setProgress, bytesEnd, bytesStart }: ProgressConstructor) {
    this._fileUrl = fileUrl;
    this._setProgress = setProgress;
    this._chunks = datachuck;
    this._bytesStart = bytesStart;
    this._bytesEnd = bytesEnd;
    this._fetchProgress();
  }

  private async _fetchProgress() {
    const response = await fetch(this._fileUrl, {
      headers: { Range: `bytes=${this._bytesStart}-${this._bytesEnd}` },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }
  
    const reader = response.body?.getReader();
    const totalSize = Number(response.headers.get("content-length"));
    let progress = 0;
  
    // @ts-ignore
    const readFileData = async () => {
      const result = await reader?.read();
      if (result && !result.done) {
        if (result.value) {
          this._chunks && this._chunks.push(result.value);
          progress += result.value.length;
          this._setProgress(Math.floor((progress / totalSize) * 100));
        }
        return readFileData();
      }
    };
  
    return readFileData();
  }
}