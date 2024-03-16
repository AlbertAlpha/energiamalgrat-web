const Page404 = () => {
  return (
    <div className="grid gap-4 md:flex md:min-h-[60vh] md:items-center md:justify-center">
      <div className="text-center">
        <img width={400} src="/assets/not-found-404.svg" alt="404" />
        <a
          href="https://stories.freepik.com/web"
          className="text-xs italic text-neutral-500 dark:text-neutral-400"
          target="_blank"
          rel="noreferrer"
        >
          Il·lustració de Freepik Stories
        </a>
      </div>

      <div className="text-center md:text-start">
        <h1 className="mb-10 text-3xl">Pàgina no trobada</h1>
        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
          <span aria-hidden="true">←</span> Tornar al inici
        </a>
      </div>
    </div>
  );
};

export default Page404;
