export function postsHasErrored(bool) {
    return {
        type: 'POSTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function postsIsFetching(bool) {
    return {
        type: 'POSTS_IS_FETCHING',
        isFetching: bool
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
        dispatch(postsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(postsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((posts) => dispatch(postsFetchDataSuccess(posts)))
            .catch((e) => {
                console.log(e);
                dispatch(postsHasErrored(true))
            });
    };
}

export function postsDeleteById(id) {
    return {
        type: 'POSTS_DELETE_BY_ID',
        id: id
    }
}
