export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: Date;
    completedDate: number | null;
    interruptDate: number | null;
    type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
}