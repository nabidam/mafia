const CenteredBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 flex-wrap">
      {children}
    </div>
  );
};

export default CenteredBox;
