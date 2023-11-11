import Header from '@/components/AnimeList/Header';
import { getAnimeResponse } from './libs/api-libs';
import AnimeUpdate from '@/components/AnimeList';


const Page = async() => {
  const updateAnime = await getAnimeResponse("/ongoing-anime")
  const tamatAnime = await getAnimeResponse("/complete-anime/1")

  return (
    <>
      <section className="container">
        <Header secsion="Baru di update" linkHref="/populer" />
        <AnimeUpdate api={updateAnime} ep="Episode"/>

        <Header secsion="Anime tamat" linkSecsion="Lihat Semua" linkHref="/populer" />
        <AnimeUpdate api={tamatAnime} tipe="complete-anime" ep="Episode"/>
      </section>
    </>
  );
};

export default Page;
