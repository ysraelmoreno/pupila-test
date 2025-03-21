import { Group } from "../../interface/visualReference.interface";
import localStorageService from "../localStorage.service";

class GroupsService {
  createGroup(group: Omit<Group, "id">, groupKey: string): Group[] {
    const groupStorage = localStorageService.get(groupKey);

    if (groupStorage.name === group.name) {
      throw new Error("Group already exists");
    }

    const newGroup = {
      ...group,
      id: Math.random() * 100,
    };

    groupStorage.push(newGroup);

    localStorageService.add(groupKey, groupStorage);

    return groupStorage;
  }

  deleteGroup(groupKey: string, id: string) {
    const groupStorage = localStorageService.get(groupKey);

    localStorageService.add(groupKey, groupStorage.filter((group: Group) => group.id !== id));
  }
}

export default new GroupsService();
