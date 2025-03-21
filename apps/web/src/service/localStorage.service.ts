class LocalStorageService {
  add(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const data = localStorage.getItem(key);

    if (!data) return [];

    return JSON.parse(data);
  }
}

export default new LocalStorageService();
