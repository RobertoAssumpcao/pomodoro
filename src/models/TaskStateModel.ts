import { TaskModel } from "./TaskModel.ts";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
};