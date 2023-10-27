import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

let dbRef = collection(firestore, 'tweets')

export const tweetStatus = (status) => {
    let object = {
        status: status,
    }
    addDoc(dbRef, object)
    .then((res) => {
        
    })
    .catch((err) => {
        console.log(err);
    })  
}

export const getTweets = (setGetTweetStatus) => {
    onSnapshot(dbRef, (res) => {
        setGetTweetStatus(res.docs.map((docs) => {
            return {...docs.data(), id: docs.id}
        }));
    })
}