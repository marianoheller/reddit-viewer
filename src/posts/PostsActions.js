export function postsHasErrored(bool) {
    return {
        type: 'POSTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function postsIsLoading(bool) {
    return {
        type: 'POSTS_IS_LOADING',
        isLoading: bool
    };
}

export function postsFetchDataSuccess(posts) {
    return {
        type: 'POSTS_FETCH_DATA_SUCCESS',
        posts
    };
}

export function postsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch((e) => {
                console.log(e);
                dispatch(itemsHasErrored(true))
            });
    };
}

export function postsDeleteById(id) {
    return {
        type: 'POSTS_DELETE_BY_ID',
        id: id
    }
}
