import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../actions/actionTypes';
import { fetchImages } from '../../api/index';
import { setImages, setError } from '../actions/imageActions';

const getPage = (state) => state.pageReducer;

//worker saga
function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

//watcher saga
export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
