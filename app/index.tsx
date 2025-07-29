import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import TaxCalculator from '../components/TaxCalculator';

const Index = () => {
  const [taxData, setTaxData] = useState({
    income: 1200000,
    deductions: { section80C: 150000, section80D: 25000, section80G: 0, homeLoanInterest: 200000 },
    oldRegimeTax: 187200,
    newRegimeTax: 198500,
    recommendation: 'Old Regime',
    savings: 11300
  });

  // TaxCalculator form state
  const [income, setIncome] = useState("");
  const [employmentType, setEmploymentType] = useState("salaried");
  const [ageGroup, setAgeGroup] = useState("below60");
  const [deductions80C, setDeductions80C] = useState(0);
  const [deductions80D, setDeductions80D] = useState(0);
  const [hraExemption, setHraExemption] = useState(0);
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);
  const [educationLoanInterest, setEducationLoanInterest] = useState(0);
  const [nps, setNps] = useState(0);
  const [deductions80G, setDeductions80G] = useState(0);
  const [regime, setRegime] = useState("new");
  const [taxResult, setTaxResult] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tax Calculator</Text>
        <Text style={styles.subtitle}>Calculate your income tax efficiently</Text>
      </View>

      <View style={styles.content}>
        <TaxCalculator
          onTaxDataChange={setTaxData}
          income={income}
          setIncome={setIncome}
          employmentType={employmentType}
          setEmploymentType={setEmploymentType}
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          deductions80C={deductions80C}
          setDeductions80C={setDeductions80C}
          deductions80D={deductions80D}
          setDeductions80D={setDeductions80D}
          hraExemption={hraExemption}
          setHraExemption={setHraExemption}
          homeLoanInterest={homeLoanInterest}
          setHomeLoanInterest={setHomeLoanInterest}
          educationLoanInterest={educationLoanInterest}
          setEducationLoanInterest={setEducationLoanInterest}
          nps={nps}
          setNps={setNps}
          deductions80G={deductions80G}
          setDeductions80G={setDeductions80G}
          regime={regime}
          setRegime={setRegime}
          taxResult={taxResult}
          setTaxResult={setTaxResult}
          isCalculated={isCalculated}
          setIsCalculated={setIsCalculated}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 60,
    backgroundColor: '#0070ba',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
    alignContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default Index;