import  { useEffect } from 'react'
import Swal from 'sweetalert2';
export default function Modal(props) {
  return (
    useEffect(()=>{
        if(props.modal){
            Swal.fire({
                title: props.modal.name,
                html: `
                  <div style="text-align: center; font-size: 1.1em;">
                    <p><strong>Email:</strong> ${props.modal.email}</p>
                    <p><strong>Address:</strong> ${props.modal.address}</p>
                    <p><strong>Phone:</strong> ${props.modal.phone}</p>
                  </div>
                `,
                showCloseButton: true,
                confirmButtonText: 'OK',
                customClass: {
                  popup: 'animated fadeInDown', // Add animation if desired
                },
              });
        }

    }, [props.modal])
  )
  return null;
}
