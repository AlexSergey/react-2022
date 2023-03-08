export interface IImage {
  url: string;
}

export const ImageComponent: { Large: ({ url }: IImage) => JSX.Element; Small: ({ url }: IImage) => JSX.Element } = {
  Large: ({ url }: IImage): JSX.Element => {
    return <img src={url} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />;
  },
  Small: ({ url }: IImage): JSX.Element => {
    return (
      <div
        className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
        style={{ backgroundImage: `url("${url}")` }}
      ></div>
    );
  },
};
