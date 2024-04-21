import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { sidebarAtom } from '../store/atoms/sidebarAtom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../store/atoms/authAtom';
import AddDocumentComponent from '../components/AddDocumentComponent';

const AddDocuments = () => {
  const isSidebarOpen = useRecoilValue(sidebarAtom);
  const auth = useRecoilValue(authAtom);

  const sidebar = auth?.accessToken ? <Sidebar /> : null;
  const marginLeft = !auth?.accessToken
    ? 'ml-12'
    : isSidebarOpen
    ? 'ml-64'
    : 'ml-36';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {sidebar}
      <div className={`flex-1 flex flex-col ${marginLeft}`}>
        <AddDocumentComponent />
      </div>
      <Footer />
    </div>
  );
};

export default AddDocuments;