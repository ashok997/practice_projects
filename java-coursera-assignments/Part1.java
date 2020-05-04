
/**
 * Finding a Gene from a dna sequence
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Part1 {
    
    public String findSimpleGene(String dna){
        String result = "";
        int startIndex = dna.indexOf("ATG");
        if (startIndex == -1) {
            return "";
        }
        
        int endIndex = dna.indexOf("TAA", startIndex+3);
        if (endIndex == -1) {
            return "";
        }
        
        result =dna.substring(startIndex,endIndex+3);
        if (result.length()%3 == 0){
            return result;
        }
        return "";
    }
    
    public void testSimpleGene(){
        String dna = "AAATGCCCTAACTAGATTAAGAAACC";
        System.out.println("DNA string is" + dna);
        String  gene = findSimpleGene(dna);
        System.out.println("Gene is" + gene);
    }
    
        
    }
    
