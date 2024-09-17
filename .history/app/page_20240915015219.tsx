import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const name = "世界";
  return (
    <section className={style.top}>
      <div>
        <h1 className={style.title}>テクノロジーの力で{name}を変える</h1>
        <p className={style.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
      </div>
      <Image className={style.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
    </section>
  );
}
