import Image from "next/image";

export default function ProfileImage() {
  return (
    <>
      <Image
        src="/images/mutti.jpg"
        height={144}
        width={144}
        alt="Mutti u rehman"
      />
    </>
  );
};
