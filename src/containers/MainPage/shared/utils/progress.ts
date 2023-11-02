type ProgressConstructor = {
  fileUrl: string;
  setProgress: (value: number) => void;
  datachuck?: Uint8Array[];
};

export class Progress {
  private _fileUrl: string;
  private _setProgress: (value: number) => void;
  private _chunks: Uint8Array[] | undefined;

  constructor({ fileUrl, datachuck, setProgress }: ProgressConstructor) {
    this._fileUrl = fileUrl;
    this._setProgress = setProgress;
    this._chunks = datachuck;
    this._fetchProgress();
  }

  private async _fetchProgress() {
    const response = await fetch(this._fileUrl);
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