// A simple java program that read files and add them to zipfile //



package com.example.filesearch;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class FileSearchApp {
	
	String path;
	String regex;
	String zipFileName;
	

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
		System.out.println("processFile: " + file);
	}


	private void addFileToZip(File file) {
		// TODO Auto-generated method stub
		System.out.println("searchFile: " + file);
		
	}


	private void searchFile(File file) {
		// TODO Auto-ge	nerated method stub
		System.out.println("addFiletoZip: " + file);
		
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
	}


	public String getZipFileName() {
		return zipFileName;
	}


	public void setZipFileName(String zipFileName) {
		this.zipFileName = zipFileName;
	}

}