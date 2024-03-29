type UnderConstructionPageProps = {
  title: string;
};

const UnderConstructionPage = ({ title }: UnderConstructionPageProps) => (
  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="mx-auto max-w-2xl pt-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Pàgina en construcció, disculpi les molèsties.</p>
        <img width={400} src="/assets/building-blocks.svg" alt="404" />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            <span aria-hidden="true">←</span> Tornar al inici
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default UnderConstructionPage;
