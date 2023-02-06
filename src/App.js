import './App.css';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  doc, 
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  deleteField
 } from "firebase/firestore";
import { app } from "./components/firebase";

const firestore = getFirestore(app)  // instance of firestore

function App() {
 
// adding data in collection & documents -------------->>

 const writeData = async () => {
  let result = await addDoc(collection(firestore,"cities"), {
      name: "ara",
      pin:802301,
      lat: 123,
      long: 345
   })

   alert("Data added successfully!!")
 }

 // making subcollection

 const addSubCollection = async () =>{
     let results = await addDoc(collection(firestore, "cities/gdgkJS5YZD0UZ9qRSKLK/places"),{
          name:" ramna mandir",
          description: "hanuman mandir",
     })
     alert("Data added successfully!!")
 }

 // getting / read data of collection & documents (if you know the id) -------------->>

 const getDocument = async () =>{
   const ref = doc(firestore,"cities" , "gdgkJS5YZD0UZ9qRSKLK")
   const snap = await getDoc(ref);

   console.log(snap.data)
 }

 // getting data of collection & documents by query -------------->>

 const getDocumentByQuery = async () =>{
   const collectionRef =  collection(firestore, 'cities');
   const myQuery = query(collectionRef, where("pin", "==", 802301));

   const snapshot  = await getDocs(myQuery);
   snapshot.forEach((data) => console.log(data.data()))
    
   alert("Data fetch successfully!!")
 }

 // updating data of collection & documents -------------->>

 let updatingData = async () => {
   const docref = doc(firestore, "cities", "gdgkJS5YZD0UZ9qRSKLK" )
      await updateDoc( docref, {
        name: "patna",
        pin: 800001
      })

      alert("Data updated successfully!!")
 }


 // deleting docs in collection & documents -------------->>


 let deletingData = async () => {
  const deleteRef = doc(firestore, "/cities/gdgkJS5YZD0UZ9qRSKLK/places/jXhbveEPpJknQt8iEoGV")
    
      await deleteDoc(deleteRef)
    
     alert("Data / Docs deleted successfully!!")
}




 // deleting fields in collection & documents -------------->>

 let deletingField = async () => {
  const deleteRef = doc(firestore, "cities/gdgkJS5YZD0UZ9qRSKLK")
     await updateDoc(deleteRef, {
         long: deleteField()
     })

     alert("Field deleted successfully!!")
}


  return (
    <>
    <div className="main-div">
      <div className="div">
        <h1>CRUD OPERATION OF DATA IN CLOUD FIRESTORE</h1><br/>
        <button onClick={writeData}>Add Data</button><br/>
        <button onClick={addSubCollection}>Add SubCollec Data</button><br/>
        <button onClick={getDocument}>Get Data</button><br/>
        <button onClick={getDocumentByQuery}>Get Data By Query</button><br/>
        <button onClick={updatingData}>Update Data</button><br/>
        <button onClick={deletingData}>Delete Data</button><br/>
        <button onClick={deletingField}>Delete Field</button>
        
        </div>
    </div>
    </>
  );
}

export default App;
