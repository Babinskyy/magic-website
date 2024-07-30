import Services from "./_components/Services";
import Contact from "./_components/Contact";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Testimonials from "./_components/Testimonials";

const getLandingPageData = async (
  lang: string
) => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;
  let req = await fetch(url, {
    next: { revalidate: 10 },
  });

  const storyData = await req.json();
  const {
    nav_section,
    hero_section,
    services_section,
    testimonials_section,
    contact_section,
    faq_section,
    footer_section,
  } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
    testimonials_section: testimonials_section[0],
    contact_section: contact_section[0],
    faq_section: faq_section[0],
    footer_section: footer_section[0],
  };
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const storyData = await getLandingPageData(
    lang
  );

  return (
    <>
      <Navbar data={storyData.nav_section} />
      <Hero data={storyData.hero_section} />
      <Services
        data={storyData.services_section}
      />
      <Testimonials
        data={storyData.testimonials_section}
      />
      <Contact data={storyData.contact_section} />
      <Faq data={storyData.faq_section} />
      <Footer data={storyData.footer_section} />
    </>
  );
}
