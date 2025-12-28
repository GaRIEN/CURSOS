import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

const STORAGE_KEY = 'tasks';

@Injectable({
    providedIn: 'root'
})
export class TaskStorageService {

    load(): Task[] {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return [];
        }

        const tasks = JSON.parse(raw) as Task[];

        return tasks.map(task => ({
            ...task,
            fechaLimite: new Date(task.fechaLimite)
        }));
    }

    save(tasks: Task[]): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }

    clear(): void {
        localStorage.removeItem(STORAGE_KEY);
    }
}
