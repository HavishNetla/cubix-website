export default ({ children }) => (
  <>
    <a>{children}</a>
    <style jsx>
      {`
        a {
          display: inline-block;
          cursor: pointer;
          padding: 0.5rem 1rem;
          margin: -0.25rem -0.5rem;
          margin: 10px;
          background-color: rgb(255, 55, 64);
          border-radius: 5px;

          transition: background 0.2s ease, color 0.2s ease,
            box-shadow 0.2s ease;
        }
        a:hover {
          background-color: #fcc917;
          color: black;
        }
      `}
    </style>
  </>
)
