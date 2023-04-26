const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return <div>category: {slug}</div>;
};

export default page;
