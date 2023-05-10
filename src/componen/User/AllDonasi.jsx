import React from 'react'
import { Container,Row,Table} from 'reactstrap'
import { db } from '../../../firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
// import ProductDonasi from '../../assets/images/Kebakaran3.jpeg'
import useGetData from '../../custom-hooks/useGetData'
import { toast } from 'react-toastify'




const AllDonasi = () => {
  const {data:donasiData, Loading} = useGetData("Donasi");

  const deleteDonasi = async(id) => {
    await deleteDoc(doc(db, 'Donasi', id))
    toast.success("Donasi Berhasil diHapus")
  }


  return (
   <>
   <section>
    <Container>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Judul</th>
              <th>Jumlah Donasi</th>
              <th>Kategori</th>
              <th>Deskripsi</th>
              <th>
              Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              donasiData.map(item=>(
                <tr key={item.id}>
              <td><img src={item.imgUrl} alt="" /></td>
              <td>{item.Title}</td>
              <td>{item.JlhDonasi}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={()=> {deleteDonasi(item.id)}} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
              ))
            }
          </tbody>
        </Table>
      </Row>
    </Container>
   </section>
   </>
  )
}

export default AllDonasi