type FooterData = {
  text: string;
};

const Footer = ({
  data,
}: {
  data: FooterData;
}) => {
  const { text } = data;
  return (
    <div className="flex w-full flex-col mt-4 items-center justify-center text-center pt-10 mt-5 mb-10">
      {text}
    </div>
  );
};

export default Footer;
