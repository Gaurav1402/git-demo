import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { tasksAction } from "../TaskSlice";

function fetchTasks() {
    return axios.get("http://localhost:3000/tasks");
}
function SaveTaskDetails(data) {
    return axios.post("http://localhost:3000/tasks", data);
}
function deleteTaskDetails(id) {
    return axios.delete("http://localhost:3000/tasks/" + id);
}
function fetchById(id) {
    return axios.get("http://localhost:3000/tasks/" + id);
}
function editTaskDetails(id, data) {
    return axios.put("http://localhost:3000/tasks/" + id, data);
}

function* editTask(action) {
    try {
        const response = yield call(editTaskDetails, action.payload.taskId, action.payload.data);
        if (response.status === 200) {
            yield put(tasksAction.editTaskSuccess(response.data));
        }
    } catch (error) {
        yield put(tasksAction.editTaskFailure(error));
    }
}

function* getAllTasks() {
    try {
        const responce = yield call(fetchTasks);
        if (responce.status == 200) {
            yield put(tasksAction.getAllTasksSucces(responce.data));
        }
    }
    catch (error) {
        yield put(tasksAction.getAllTasksFailure(error))
    }
}

function* deleteTask(action) {
    try {
        const responce = yield call(deleteTaskDetails, action.payload);
        if (responce.status == 200) {
            yield put(tasksAction.deleteTaskSuccess(action.payload));
        }
    }
    catch (error) {
        yield put(tasksAction.deleteTaskFailure(error))
    }
}

// function* getTaskById(action) {
//     try {
//         const responce = yield call(fetchById, action.payload);
//         if (responce.status == 200) {
//             yield put(tasksAction.getTaskByIdsSuccess(responce.data));
//             console.log("getId", responce.data)
//         }
//     }
//     catch (error) {
//         yield put(tasksAction.getAllTasksFailure(error))
//     }
// }
function* getTaskById(action) {
    try {
        const response = yield call(fetchById, action.payload); // Pass the ID to API
        if (response.status === 200) {
            yield put(tasksAction.getTaskByIdSuccess(response.data));
        }
    } catch (error) {
        yield put(tasksAction.getTaskByIdFailure({
            message: error.message,
            code: error.code,
            status: error.response?.status || null,
        }));
    }
}

function* saveTask(action) {
    try {
        const responce = yield call(SaveTaskDetails, action.payload);
        if (responce.status == 201) {
            yield put(tasksAction.saveTaskSuccess());
        }
    }
    catch (error) {
        yield put(tasksAction.saveTaskFailure(error))
    }
}
export function* watchTasksSaga() {
    yield takeLatest(tasksAction.getAllTasks, getAllTasks),
        yield takeLatest(tasksAction.saveTask, saveTask),
        yield takeLatest(tasksAction.deleteTask, deleteTask),
        yield takeLatest(tasksAction.editTask, editTask),
        yield takeLatest(tasksAction.getTaskById, getTaskById);
} 