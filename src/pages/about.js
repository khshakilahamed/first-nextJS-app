import RootLayout from "../../components/Layouts/RootLayout";

const about = () => {
  return <div>This is about page</div>;
};

export default about;

about.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
