export default function Footer() {
  return (
    <div className="flex bg-gray-100 p-10 justify-center">
      <p>
        © 2021 Medblocks. All rights reserved. <wbr />
        For communications email{" "}
        <a
          className="font-bold"
          className="text-blue-500 font-semibold hover:text-blue-400"
          href="mailto:sidharth@medblocks.com"
        >
          sidharth@medblocks.com
        </a>
        .
      </p>
    </div>
  );
}
