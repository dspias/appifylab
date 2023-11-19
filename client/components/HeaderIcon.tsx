function HeaderIcon({ Icon, active = false }: { Icon: any; active?: boolean }) {
  return (
    <div className="flex items-center rounded-xl group active:border-blue-500 cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100">
      <Icon
        className={`h-5 sm:h-7 mx-auto text-center group-hover:text-blue-500 ${
          active ? "text-blue-500" : "text-gray-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
