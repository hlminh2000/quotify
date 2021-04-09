import "./styles.css";
import Button from "./uikit/Button";

export default function App() {
  return (
    <div
      style={{
        background:
          'url("https://www.cosmopolitanme.com/public/images/2019/01/30/self-love-heart-woman.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          width: "100%",
          paddingBottom: "20px"
        }}
      >
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
          <h1>How you love yourself is how you teach others to love you.</h1>
          <h2>- Rupi Kaur -</h2>
          <Button>Generate</Button>
        </div>
      </div>
    </div>
  );
}
