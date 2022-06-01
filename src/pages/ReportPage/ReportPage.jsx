import Container from '../../components/Container/Container';
import ChartReport from '../../components/Report/ChartReport/ChartReport';
import ReportControlPanel from '../../components/Report/ReportControlPanel/ReportControlPanel';
import ReportTransactionsList from '../../components/Report/ReportTransactionsList/ReportTransactionsList';
import TotalAmount from '../../components/Report/TotalAmount/TotalAmount';
import s from './ReportPage.module.scss';
const ReportPage = () => {
  return (
    <>
      {/* <div className={s.bg}> */}
      <section className={s.section}>
        <Container>
          <ReportControlPanel />
          <TotalAmount />
          <ReportTransactionsList />
          <ChartReport />
        </Container>
      </section>
      {/* </div> */}
    </>
  );
};

export default ReportPage;
