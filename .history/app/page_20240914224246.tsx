import style from "./page.module.css";

export default function Home() {
  const name = "世界";
  return (
    <div>
      <h1 className="style.title">テクノロジーの力で{name}を変える</h1>
      <p className="style.description">私たちは市場をリードしているグローバルテックカンパニーです。</p>
    </div>
  );
}
