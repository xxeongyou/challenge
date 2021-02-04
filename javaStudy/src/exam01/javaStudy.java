package exam01;

import java.util.Scanner;

public class javaStudy {

	public static void main(String[] args) {
		boolean run = true;
		int studentNum = 0;
		int[] scores = null;
		int max = 0;
		Scanner scan = new Scanner(System.in);
		
		while(run) {
			System.out.println("-------------------------------------");
			System.out.println("1.학생수|2.점수입력|3.점수리스트|4.분석|5.종료");
			System.out.println("-------------------------------------");
			System.out.println("선택> ");
//			System.out.println("선택동작함");
			
			int selectNo = scan.nextInt();
//			System.out.println(selectNo);
			
			if(selectNo==1) {
				System.out.println("학생수> ");
				studentNum = scan.nextInt();
				scores = new int[studentNum];
			}
			else if(selectNo==2) {
//				System.out.println("2동작함");
				for(int i=0; i<studentNum; i++) {
					System.out.println("scores["+i+"]> ");
					scores[i] = scan.nextInt();					
				}			
			}
			else if(selectNo==3) {
				for(int i=0; i<studentNum; i++) {
					System.out.println("scores["+i+"]> "+scores[i]);
				}
			}
			else if(selectNo==4) {
//				System.out.println("동작");
				int sum = 0;
				for(int i=0; i<scores.length; i++) {
					sum += scores[i]; 
					if(max<scores[i]) {
						max = scores[i];
					}
				}
				double avg = (double)sum/scores.length;
				System.out.println("최고 점수: "+max);
				System.out.println("평균 점수: "+avg);
			}
			else if(selectNo==5) {
				run = false;
			}
		}
		System.out.println("프로그램 종료");
	}
}
