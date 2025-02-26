const GuildLogo = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-40 h-40 sm:w-44 sm:h-44 rounded-full p-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/0c3e78b2242f05bc52baddeacf1050e62bfc30b67b43674e513c4329579a25aa?placeholderIfAbsent=true"
        className="object-contain w-full h-full"
        alt="Martians Gaming Guild Logo"
      />
    </div>
  );
};

export default GuildLogo;
