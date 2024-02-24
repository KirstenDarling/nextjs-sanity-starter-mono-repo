import Link from "next/link";
import colors from "../data/colors.json";

export interface ColorProps {
  name: string;
  hex: string;
}

export default function Color({ color }: { color: ColorProps }) {
  console.log(colors);
  return (
    <>
      {/* {colors.map((color) => (
        <div
          key={color.name}
          className="flex items-center justify-between w-1/2"
          style={{ backgroundColor: color.hex }}
        >
          <h1 className="text-6xl font-bold">{color.name}</h1>
        </div>
      ))} */}
      {colors.map((color) => (
        <Link href={`/${color.name}`} key={color.name}>
          <h1 style={{ color: color.hex }}>{color.name}</h1>
        </Link>
      ))}
    </>
  );
}

export async function getStaticPaths() {
  const paths = colors.map((color) => {
    return {
      params: { color: color.name },
    };
  });
  return { paths, fallback: false };
}

// export async function getStaticProps({ params }: { params: { color: any } }) {
//   // that find is only going to find the first item that matches the condition
//   const color = colors.find((color) => color.name === params.color);
//   return { props: { color } };
// }
