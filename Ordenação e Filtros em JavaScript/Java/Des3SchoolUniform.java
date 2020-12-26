
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
import java.util.stream.Collectors;

public class SchoolUniforms {
    public static void main(String[] args) throws IOException {

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer str = new StringTokenizer(reader.readLine());
        Integer b, a = Integer.parseInt(str.nextToken());

        String name,size,color;
        String[] sizeColor;
        List<Uniform> list=new ArrayList<>();

        for(var i=1; i<=a; i++){

            name = reader.readLine().trim();
            sizeColor = reader.readLine().trim().split(" ");
            color = sizeColor[0];
            size = sizeColor[1];
            list.add(new Uniform(name, color, size));

        }
        reader.read();
        list.sort(Comparator.comparing((Uniform uniform)->uniform.colorUniform).reversed()
                .thenComparing(uniform->uniform.size).reversed().thenComparing(uniform->uniform.nameStudent));

        list.stream().forEach(System.out::println);
        
  }
}

class Uniform{
    public String nameStudent;
    public String colorUniform;
    public String size;

    public Uniform(String nameStudent, String colorUniform, String size) {
        this.nameStudent = nameStudent;
        this.colorUniform = colorUniform;
        this.size = size;
    }

    @Override
    public String toString() {
        return ""+ colorUniform +" " + size + " " + nameStudent;
    }
}