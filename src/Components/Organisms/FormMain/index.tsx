type FormMainProps = {
  children: JSX.Element | JSX.Element[];
};

const FormMain = ({ children }: FormMainProps): JSX.Element => {
  return (
    <div className="max-h-full w-full flex flex-col overflow-y-auto">
      <section className="grid grid-cols-8 grid-rows-6 gap-5 bg-gray-400 p-4 h-full w-full">
        {children}
      </section>
    </div>
  );
};

export default FormMain;
