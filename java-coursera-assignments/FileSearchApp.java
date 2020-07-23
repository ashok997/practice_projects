// A simple java program that read files and add them to zipfile //



package com.example.filesearch;

import java.io.File;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.regex.Pattern;


public class FileSearchApp {
	
	String path;
	String regex;
	String zipFileName;
	Pattern pattern;
	

	public static void main(String[] args) {
		FileSearchApp app = new FileSearchApp();
		
		switch(Math.min(args.length, 3)) {
		case 0:
			System.out.println("USAGE: FileSearchApp path [regex] [zipfile]");
			return;
		case 3:
			app.setZipFileName(args[2]);
		case 2:
			app.setRegex(args[1]);
		case 1:
			app.setPath(args[0]);
		}
		try {
			app.walkDirectory(app.getPath());
		} catch (Exception e) {
			e.printStackTrace();
		}

	}


	private void walkDirectory(String path) throws IOException {
		Files.walk(Paths.get(path))
			.forEach(f -> processFile(f.toFile()));
		
	}
	
	public void processFile(File file) {
		
			try {
				if(searchFile(file)){
					addFileToZip(file);
				}
			} catch (IOException|UncheckedIOException e) {
				
				System.out.println("Error processing file:" + file + ": " + e);
			} 
	}


	private boolean addFileToZip(File file) {
		
		return false;
		
	}


	private boolean searchFile(File file) throws IOException{
		
		return Files.lines(file.toPath(), StandardCharsets.UTF_8)
				.anyMatch(t-> searchText(t));
		
	}


	private boolean searchText(String text) {
//		return (this.getRegex() == null)? true :
//			this.pattern.matcher(text).matches();
		return true;
	}


	public String getPath() {
		return path;
	}


	public void setPath(String path) {
		this.path = path;
	}


	public String getRegex() {
		return regex;
	}


	public void setRegex(String regex) {
		this.regex = regex;
		this.pattern = Pattern.compile(regex);
	}


	public String getZipFileName() {
		return zipFileName;
	}


	public void setZipFileName(String zipFileName) {
		this.zipFileName = zipFileName;
	}

}