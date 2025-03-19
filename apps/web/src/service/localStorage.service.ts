class LocalStorageService {
  add(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? "");
  }
}

export default new LocalStorageService();
