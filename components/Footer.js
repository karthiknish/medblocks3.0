export default function Footer() {
  return (
    <div className="flex-col p-5 bg-gray-100">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <img width="40" className="mr-2" src="/logo.png" />
        <p className="font-source font-bold text-gray-600 text-xl mr-2">
          Medblocks
        </p>
        <p className="text-xs">© 2021 Medblocks. All rights reserved</p>
      </div>
      <div className="flex mt-2 justify-center items-center">
        <p>
          For communications{" "}
          <a
            className="font-bold"
            style={{ color: "#3273dc" }}
            href="mailto:contact@medblocks.com"
          >
            contact@medblocks.com
          </a>
        </p>
      </div>
    </div>
  );
}
