import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import img from "../Asset/Scanner.jpeg"
export default function Pymentmodal(props) {
    // <img src={img} alt="" />
    return (
        useEffect(() => {
            if (props.pymentmodal) {
                Swal.fire({
                    title: props.pymentmodal.title,
                    imageUrl: `http://localhost:3000/static/media/Scanner.c75612b27d5025af2d84.jpeg`,
                    imageWidth: 250,
                    imageHeight: 250,
                    imageAlt: "Custom image",
                    showCloseButton: true,
                    confirmButtonText: 'DONE',
                    customClass: {
                    popup: 'animated fadeInDown', // Add animation if desired
                    },
                });
            }

        }, [props.pymentmodal])
    )
}

