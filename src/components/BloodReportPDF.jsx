import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#333',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomStyle: 'solid',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#007BFF',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '33.33%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    padding: 5,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  tableCol: {
    width: '33.33%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomStyle: 'solid',
    padding: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
  },
});

const BloodReportPDF = ({ data, patientInfo }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Detailed Blood Report</Text>
        <Text>Patient Name: {patientInfo.name}</Text>
        <Text>Age: {patientInfo.age}</Text>
        <Text>Date: {patientInfo.date}</Text>
      </View>

      {/* Red Blood Cells Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Red Blood Cells (RBC)</Text>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Type</Text>
            <Text style={styles.tableColHeader}>Count</Text>
            <Text style={styles.tableColHeader}>Percentage</Text>
          </View>
          {/* Table Rows */}
          {data.RBC.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{item.type}</Text>
              <Text style={styles.tableCol}>{item.count}</Text>
              <Text style={styles.tableCol}>{item.percent}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* White Blood Cells Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>White Blood Cells (WBC)</Text>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Type</Text>
            <Text style={styles.tableColHeader}>Count</Text>
            <Text style={styles.tableColHeader}>Percentage</Text>
          </View>
          {/* Table Rows */}
          {data.WBC.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{item.type}</Text>
              <Text style={styles.tableCol}>{item.count}</Text>
              <Text style={styles.tableCol}>{item.percent}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Platelets Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Platelets</Text>
        <Text>Count: {data.Platelets.count}</Text>
        <Text>Percentage: {data.Platelets.percentage}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Page 1</Text>
      </View>
    </Page>
  </Document>
);

export default BloodReportPDF;
