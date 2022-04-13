// const mockAPI = (returnValue) => (arg, cb) => {
//     console.log("@@@@@@@@" + arg);

//     for (var i = 0; i < returnValue.length; i++) {
//         console.log("%%%%%%%%%" + returnValue[i]);
//     }
    
//     setTimeout(() => cb(returnValue), 2000);
// }

// const fetchSession = mockAPI({ id: "123765" });
// const fetchUser = mockAPI({ firstname: "Bob" });
// const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ]);

// const runCallbacks = () => {
//     fetchSession("session-id", (session) => {
//         fetchUser(session, (user) => {
//             fetchUserFavorites(user, (favorites) => {
//                 console.log(favorites);
//             })
//         })
//     })
// }

// runCallbacks();

//flat callbacks
const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000)
}

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ]);

const runCallbacksFlat = () => {
    const handleFavorites = (favorites) => {
        console.log(favorites);
    }

    const handleUser = (user) => {
        fetchUserFavorites(user, handleFavorites);
    }

    const handleSession = (session) => {
        fetchUser(session, handleUser);
    }

    fetchSession("session-id", handleSession);
}

runCallbacksFlat();