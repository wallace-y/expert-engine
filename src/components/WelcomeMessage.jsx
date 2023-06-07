import { Link } from "react-router-dom";

function WelcomeMessage() {
  return (
    <section>
      <div class="px-4 py-5 my-5 text-center">
        <p>
          <i class="fa-regular fa-trash-can fa-2xl"></i>
        </p>
        <h1 class="display-5 fw-bold text-body-emphasis">
          Welcome to <strong>the Marketplace</strong>
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">What would you like to do today?</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/items" className="link-dark">
              I'm here to buy
            </Link>
            <Link to="/sellItems" className="link-dark">
              I'm here to sell
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
