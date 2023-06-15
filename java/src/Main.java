import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public String generateNumber() {
        String digits = "0123456789";
        String number = "";
        while (number.length() < 3) {
            String randomIndex = String.valueOf((int)Math.floor(Math.random() * 10));
            if(!number.contains(randomIndex))
                number += randomIndex;
        }
        return number;
    }
    public int[] compareNumbers(String answer,String guess) {
        int[] base = {0,0};

        for (int i = 0; i < 3; i++) {
            if (answer.toCharArray()[i] == guess.toCharArray()[i]) {
                base[0]++;
            } else if (answer.contains(String.valueOf(guess.toCharArray()[i]))) {
                base[1]++;
            }
        }
        return base;
    }


    public static void main(String[] args) {
        Main mc = new Main();
        String answer = mc.generateNumber();
        Scanner sc = new Scanner(System.in);

        int attempts = 1;
        System.out.println("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

        while (true){
            System.out.print(attempts + "번째 시도 : ");
            String guess = sc.next();
            if(guess.length() != 3){
                System.out.println("3자리 숫자를 입력하세요");
                continue;
            }
            int[] base = mc.compareNumbers(answer,guess);
            System.out.println((base[0] > 0 ? base[0] + "S" : "") + (base[1] > 0 ? base[1] + "B" : "") + (base[0] == 0 && base[1] == 0 ? "0S0B" : ""));
            if (base[0] == 3) {
                System.out.println(attempts + "번만에 맞히셨습니다.");
                return;
            }
            attempts++;
        }
    }
}