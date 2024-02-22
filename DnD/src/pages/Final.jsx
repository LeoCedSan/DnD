import { useNavigate } from 'react-router-dom'

function Final() {
  // const item5 = sessionStorage.getItem('item5');
  const navigate = useNavigate()

  let fin;

  //   if (sessionStorage.getItem('item5') === "Amor") {
  //     setFinalImage('/images/bodaB3.jpg')
  //   }else if (sessionStorage.getItem('item5') === "Hijos") {
  //     setFinalImage('/images/bodaB1.jpg')
  //   }else if (sessionStorage.getItem('item5') === "Drogas") {
  //     setFinalImage('/images/bodaB2.jpg')
  //   }

  if (sessionStorage.getItem('item5') === "Amor") {
    fin = '/img/bodaB3.jpg'
  }else if (sessionStorage.getItem('item5') === "Hijos") {
    fin = '/img/bodaB1.jpg'
  } else if (sessionStorage.getItem('item5') === "Drogas") {
    fin = '/img/bodaB2.jpg'
  }
  const handleConfirm = () => {
    navigate('/home');
  
  };

  return (
    <div>
      <div className="Story">
      {fin && <img src={fin} alt="final" />}
      </div>
      <button onClick={handleConfirm}>
    Home
  </button>
    </div>
    
    
  )
}

export default Final