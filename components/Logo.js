export default () => (
  <div>
    <div className="container">
      <img alt="logo" src="/static/logo.png" />
    </div>
    <style jsx>
      {`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 90%;

          pointer-events: none;
          user-select: none;
        }
        @media (orientation: landscape) {
          img {
            width: 40%;
          }
        }
      `}
    </style>
  </div>
)
