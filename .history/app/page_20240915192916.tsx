import style from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

// type News = {
//   id: "string";
//   title: "string";
//   category: {
//     name: string;
//   };
//   publishiedAt: string;
//   createdAt: string;
// };

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  const name = "世界";
  return (
    <>
      <section className={style.top}>
        <div>
          <h1 className={style.title}>テクノロジーの力で{name}を変える</h1>
          <p className={style.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
        </div>
        <Image className={style.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>
      <section className={style.news}>
        <h2 className={style.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        {/* <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={style.list}>
              <div className={style.link}>
                <Image className={style.image} src="/no-image.png" alt="No Image" width={1200} height={630} />
                <dl className={style.content}>
                  <dt className={style.newsItemTitle}>{article.title}</dt>
                  <dd className={style.meta}>
                    <span className={style.tag}>{article.category.name}</span>
                    <span className={style.date}>
                      <Image src="/clock.svg" alt="" width={16} height={16} priority />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul> */}
        <div className={style.newsLink}>
          <ButtonLink hred="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
