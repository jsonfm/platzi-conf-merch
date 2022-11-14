import "./styles.css";

export const CreditCard = () => {
  return (
    <div className="card-container">
      <div className="chip"></div>
      <div className="number">xxxx xxxx xxxx xxxx</div>
      <div className="card-logo">
        <div className="circle left"></div>
        <div className="circle right"></div>
        <p>MasterCard</p>
      </div>
    </div>
  )
}
